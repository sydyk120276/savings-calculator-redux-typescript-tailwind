import { validationResult } from 'express-validator'
import { nanoid } from 'nanoid'
import path from 'path'
import { fileURLToPath } from "url";
import * as fs from "fs";

import userService from '../services/user-service.js'
import ApiError from '../exceptions/api-error.js'
import Avatar from '../models/avatar-models.js'
import User from '../models/user-models.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class UserController {
  async registration(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(
          ApiError.BadRequest("Ошибка при валидации", errors.array())
        );
      }
      const { userName, email, password } = req.body;
      const userData = await userService.registation(userName, email, password);
      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      return res.json(userData);
    } catch (e) {
      next(e);
    }
  }
  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const userData = await userService.login(email, password);
      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      return res.json(userData);
    } catch (e) {
      next(e);
    }
  }
  async logout(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const token = await userService.logout(refreshToken);
      res.clearCookie("refreshToken");
      return res.json(token);
    } catch (e) {
      next(e);
    }
  }
  async activate(req, res, next) {
    try {
      const activationLink = req.params.link;
      await userService.activate(activationLink);
      return res.redirect(process.env.CLIENT_URL);
    } catch (e) {
      next(e);
    }
  }
  async refresh(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const userData = await userService.refresh(refreshToken);
      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      return res.json(userData);
    } catch (e) {
      next(e);
    }
  }
  async getUsers(req, res, next) {
    try {
      const users = await userService.getAllUsers();
      return res.json(users);
    } catch (e) {
      next(e);
    }
  }
  async uploadAvatar(req, res) {
    try {
      const { img } = req.files
      const user = await User.findById(req.user.id);
      console.log(user);
      const avatarName = `${nanoid()}.jpg`
      img.mv(path.resolve(__dirname, '..', 'static', avatarName))
      const result = await User.updateOne({avatar: user.avatar}, { $set: { avatar: avatarName } });
      return res.json(user);
    } catch (e) {
      console.log(e);
      return res.status(400).json({ message: "Ошибка загрузки аватара" });
    }
  }

  async deleteAvatar(req, res) {
    try {
      const user = await User.findById(req.user.id);
      console.log(user);
      fs.unlinkSync(path.resolve(__dirname, '..', 'static', user.avatar))
      user.avatar = null
      await user.save()
      return res.json(user);
    } catch (e) {
      console.log(e);
      return res.status(400).json({ message: "Ошибка удаления аватара" });
    }
  }
}


export default new UserController()
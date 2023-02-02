class UserDto {
  userName;
  email;
  id;
  isActivated;
  avatar;

  constructor(model) {
    this.email = model.email
    this.id = model._id
    this.isActivated = model.isActivated
    this.userName = model.userName
    this.avatar = model.avatar
  }
}

export default UserDto
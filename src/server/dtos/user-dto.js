class UserDto {
  userName;
  email;
  id;
  isActivated;

  constructor(model) {
    this.email = model.email
    this.id = model._id
    this.isActivated = model.isActivated
    this.userName = model.userName
  }
}

export default UserDto
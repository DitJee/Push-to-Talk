import { error } from "console";
import DB from "../models";

class User {
  private User;
  private Friend;
  private FriendRequests;
  private Follow;

  constructor() {
    const db = new DB();

    this.User = db.user.user;
  }

  public allAccess = (req, res) => {
    res.status(200).send("Public Content.");
  };

  public userBoard = (req, res) => {
    res.status(200).send("User Content.");
  };

  public adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
  };

  public moderatorBoard = (req, res) => {
    res.status(200).send("Moderator Content.");
  };

  public updateUserInfo = async (req, res) => {
    try {
      const result = await this.User.update(req.body.user, {
        where: { id: req.body.user.id },
      });

      res.send({
        message: "User info was successfully updated!",
        result: result,
      });
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  };
}

export default User;

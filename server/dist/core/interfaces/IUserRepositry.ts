import { NewUserInput } from "@core/utils/types";
import { User } from "infrastructure/models/userModel";

export interface IUserRepository {
  create(userDetails: NewUserInput): Promise<User>;
  findByEmail(email: string): Promise<User | null>;
  findByPk?(primaryKey: string | number): Promise<User | null>;
  findOne(options: { where: { email: string } }): Promise<User | null>;
  changeUserPassword?(user: User, newPassword: string): Promise<boolean>;
  isValidPassword?(password: string): Promise<boolean>;
  findByWebsiteId(websiteId: string, userId: number): Promise<User | null>;
}
import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
  AutoIncrement,
  PrimaryKey,
  Unique,
  Default,
  HasMany,
  BelongsToMany,
} from "sequelize-typescript";

import { v4 as uuidv4 } from "uuid";
import { Page } from "./pageModel";
import { User } from "./userModel";
import { WebsiteAttributes } from "@core/utils/types";
import UserToWebsite from "./userToWebsiteModel";

@Table({
  tableName: "websites",
})
export class Website extends Model<WebsiteAttributes> {
  @PrimaryKey
  @Default(uuidv4)
  @Unique
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id?: string;

  @BelongsToMany(() => User, () => UserToWebsite)
  users!: User[];

  @HasMany(() => Page)
  pages!: Page[];

  @Column(DataType.STRING)
  name!: string;

  @Unique
  @Column(DataType.STRING)
  url!: string;

  @Unique
  @Column(DataType.STRING)
  websiteCode!: string;

  @Column(DataType.INTEGER)
  owner!: number;

  @Unique
  @Column(DataType.STRING)
  websiteSignature!: string;

  @CreatedAt
  createdAt?: Date;

  @UpdatedAt
  updatedAt?: Date;
}

import { describe, test, expect } from "vitest";
import { faker } from "@faker-js/faker";
import Validator from "../validators";
import {
  IsNotEmpty,
  IsOptional,
  IsUUID,
  IsDate,
  IsString,
  IsDefined,
} from "class-validator";

class Schema {
  @IsOptional()
  @IsUUID()
  id?: string;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  topic!: string;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  title!: string;

  @IsDefined()
  @IsNotEmpty()
  @IsDate()
  date!: Date;
}

describe("testing validator", () => {
  test("validate return true with empty id", async () => {
    const validator = new Validator();
    const schema = new Schema();
    schema.topic = "topic";
    schema.title = "title";
    schema.date = new Date();
    const result = await validator.validation(schema);
    expect(result).toEqual(true);
  });

  test("validate should return true with id", async () => {
    const validator = new Validator();
    const schema = new Schema();
    schema.id = faker.datatype.uuid();
    schema.topic = "topic";
    schema.title = "title";
    schema.date = new Date();
    const result = await validator.validation(schema);
    expect(result).toEqual(true);
  });

  test("validate should return false with empty topic", async () => {
    const validator = new Validator();
    const schema = new Schema();
    schema.id = faker.datatype.uuid();
    schema.title = "title";
    schema.date = new Date();
    const result = await validator.validation(schema);
    expect(result).toEqual(false);
  });

  test("validate should return false with empty title", async () => {
    const validator = new Validator();
    const schema = new Schema();
    schema.id = faker.datatype.uuid();
    schema.topic = "topic";
    schema.date = new Date();
    const result = await validator.validation(schema);
    expect(result).toEqual(false);
  });

  test("validate should return false with empty date", async () => {
    const validator = new Validator();
    const schema = new Schema();
    schema.id = faker.datatype.uuid();
    schema.topic = "topic";
    schema.title = "title";
    const result = await validator.validation(schema);
    expect(result).toEqual(false);
  });
});

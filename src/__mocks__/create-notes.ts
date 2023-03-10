import { faker } from "@faker-js/faker";
import { INoteDTO } from "../types";

export const createNotes = (count: number) => {
  const notes: INoteDTO[] = [];
  for (let i = 0; i < count; i++) {
    notes.push({
      id: faker.datatype.uuid(),
      title: faker.lorem.sentence(),
      body: faker.lorem.paragraph(),
      date: faker.date.past(),
      topic: faker.lorem.word(),
    });
  }
  return notes;
};

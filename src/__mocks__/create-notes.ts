import { faker } from "@faker-js/faker";

export const createNotes = (count: number) => {
  const notes = [];
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

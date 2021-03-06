import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";

const deleteUserService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();
  const user = users.find((user) => user!.id === id);

  if (!user) {
    throw new Error("User id not found");
  }

  await userRepository.delete(user!.id);
};

export default deleteUserService;

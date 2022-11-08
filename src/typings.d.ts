interface IUser {
  email: string;
  id: string;
  name: string | null;
  role: string;
  image: string | null;
  createdAt: string;
  bio: string | null;
}

interface ICategory {
  id: string;
  name: string;
}

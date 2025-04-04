export interface UserProps {
  _id: string;
  uid: string;
  email: string;
  username: string;
  role: string;
  __v: number;
}

export interface CourseProps {
  _id?: string;
  uid: string;
  title: string;
  description: string;
  teacher: UserProps | undefined;
  students: UserProps[];
  __v?: number;
}

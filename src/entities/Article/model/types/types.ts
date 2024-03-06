export interface IComment {
  text: string;
  userId: string;
  date: string;
}

export interface IArticle {
  id: number;
  title: string;
  subtitle: string;
  paragraph: string;
  createdArticle: string;
  comments?: IComment[];
}

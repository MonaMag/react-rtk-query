import React, { FC, memo } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import cls from "./CreateArticleForm.module.css";

export interface CreateArticleFormProps {
  className?: string;
  onClose: () => void;
}

const CreateArticleForm: FC<CreateArticleFormProps> = memo(() => {
  const formik = useFormik({
    initialValues: {
      title: "",
      subtitle: "",
      paragraph: "",
      createdArticle: "",
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .max(20, "Количество символов не должно превышать 20")
        .required("Введите название статьи"),
      subtitle: Yup.string()
        .min(20, "Количество символов не менее 20")
        .max(40, "Количество символов не должно превышать 40"),
      paragraph: Yup.string()
        .min(20, "Количество символов не менее 20")
        .required("Ведите текст статьи"),
      createdArticle: Yup.date().required("Введите дату создания статьи"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit} className={cls.wrapper}>
        <div className={cls.inputWrapper}>
          <label htmlFor="title">Название статьи</label>
          <input
            id="title"
            name="title"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
          />
          {formik.touched.title && formik.errors.title ? (
            <div>{formik.errors.title}</div>
          ) : null}

          <label htmlFor="title">Краткое описание</label>
          <input
            id="subtitle"
            name="subtitle"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.subtitle}
          />
          {formik.touched.subtitle && formik.errors.subtitle ? (
            <div>{formik.errors.subtitle}</div>
          ) : null}

          <label htmlFor="paragraph">Статья</label>
          <textarea
            id="paragraph"
            name="paragraph"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.paragraph}
          />
          {formik.touched.paragraph && formik.errors.paragraph ? (
            <div>{formik.errors.paragraph}</div>
          ) : null}

          <label htmlFor="createdArticle">Дата создания</label>
          <input
            id="createdArticle"
            name="createdArticle"
            type={"date"}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.createdArticle}
          />
          {formik.touched.createdArticle && formik.errors.createdArticle ? (
            <div>{formik.errors.createdArticle}</div>
          ) : null}
          <button type="submit" className={cls.button}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
});

export default CreateArticleForm;

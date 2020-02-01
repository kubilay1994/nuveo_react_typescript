import React from 'react';

import styles from './form.module.css';
import Input from '../Input';
import { Formik, Field, Form as FormikForm, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

import Button from '../Button';
import { RouteComponentProps } from '@reach/router';

const initialValues: BookFormData = {
    author: '',
    title: '',
    image: '',
    price: '',
    publisher: '',
    createdAt : null
};

const schema = Yup.object().shape({
    author: Yup.string()
        .trim()
        .required('Yazar ismi zorunludur'),
    title: Yup.string()
        .required('Başlık ismi zorunludur')
        .trim(),
    image: Yup.string()
        .trim()
        .url('Geçerli bir url giriniz'),
    price: Yup.string()
        .required('Kitap fiyatı girilmesi zorunludur')
        .trim(),
    publisher: Yup.string()
        .required('Yayınevi girilmesi zorunludur')
        .trim()
});

const mockAPIUrl = 'https://5e3128eb576f9d0014d64446.mockapi.io/api';

const Form: React.FC<RouteComponentProps<{}>> = ({ navigate }) => {
    const handleSubmit = async (
        values: BookFormData,
        { resetForm, setStatus }: FormikHelpers<BookFormData>
    ) => {
        try {
            values.createdAt = new Date().toISOString();
            await axios.post(`${mockAPIUrl}/books`, values);
            resetForm();
            setStatus('Kitap Başarıyla Eklendi');
        } catch (error) {
            // console.log(error);
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={schema}
        >
            {({ status, isSubmitting }) => (
                <FormikForm className={styles.form}>
                    <h2>Kitap Ekleme Ekranı</h2>

                    {status && <div className={styles.info}>{status}</div>}
                    <Field
                        name="title"
                        as={Input}
                        placeholder="Başlık giriniz"
                        label="Kitap Adı"
                    />
                    <Field
                        name="author"
                        as={Input}
                        placeholder="Yazar ismi giriniz"
                        label="Yazar"
                    />
                    <Field
                        name="publisher"
                        as={Input}
                        placeholder="Yayınevi adını giriniz"
                        label="Yayınevi"
                    />
                    <Field
                        name="price"
                        type="number"
                        as={Input}
                        placeholder="Kitap fiyatı giriniz"
                        label="Tutar"
                    />
                    <Field
                        name="image"
                        as={Input}
                        placeholder="Kitap resmi link"
                        label="Kitap resim linki"
                    />

                    <div className={styles.btnContainer}>
                        <Button
                            color="turquoise"
                            buttonClass={styles.btn}
                            type="submit"
                            disabled={isSubmitting}
                        >
                            Ekle
                        </Button>
                        <Button
                            color="red"
                            buttonClass={styles.btn}
                            type="button"
                            onClick={() => {
                                if (navigate) {
                                    navigate('../');
                                }
                            }}
                        >
                            Geri
                        </Button>
                    </div>
                </FormikForm>
            )}
        </Formik>
    );
};

export default Form;

import {useForm} from "react-hook-form";
import type {Category, Task} from "../task/TaskType.ts";
import {yupResolver} from "@hookform/resolvers/yup/src";
import * as Yup from "yup";
import {number, string} from "yup";

const validationSchema = Yup.object({
        id: number(),
        label: string().required('Label is required.'),
    }
);

export const CategoryForm = () => {

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<Category>({
        resolver: yupResolver(validationSchema)
    });

    const onSubmit = (data: Category) => {
        axiosSaveCategory(data);
    }

    return (
        <>
        <h2>Category Form</h2>
    <form onSubmit={handleSubmit(data => onSubmit(data))} method={'POST'}>
        <label htmlFor={'Label'}>Label</label>
        <input id={'Label'} type={'text'} {...register('label')}/>

        <input type={'submit'} value={'Add Category'}/>
    </form>
</>
)
    ;
}

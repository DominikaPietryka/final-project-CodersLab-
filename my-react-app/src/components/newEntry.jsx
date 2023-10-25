import React, { useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { classNames } from 'primereact/utils';
import { InputTextarea } from "primereact/inputtextarea";

export default function HookFormDoc() {
    const toast = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: form.getValues('description') });
    };

    const defaultValues = { description: '' };
    const form = useForm({ defaultValues });
    const errors = form.formState.errors;

    const onSubmit = (data) => {
        data.description && show();

        form.reset();
    };

    const getFormErrorMessage = (name) => {
        return errors[name] ? <small className="p-error">{errors[name].message}</small> : <small className="p-error">&nbsp;</small>;
    };

    return (
        <div className="newEntry container">
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-column gap-2">
                <Toast ref={toast} />
                <Controller
                    name="description"
                    control={form.control}
                    rules={{ required: 'add at least one word' }}
                    render={({ field, fieldState }) => (
                        <>
                            <label htmlFor={field.name}>add a note...</label>
                            <InputTextarea id={field.name} {...field} rows={4} cols={30} className={classNames({ 'p-invalid': fieldState.error })} />
                            {getFormErrorMessage(field.name)}
                        </>
                    )}
                />
                <Button className='back' label="back" type="submit" icon="pi pi-check" />
                <Button className='save' label="save" type="submit" icon="pi pi-check" /> 
            </form>
        </div>
    )
}
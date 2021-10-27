import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import { clearTheCart, getStoredCart } from '../../utilities/fakedb';
const Shipping = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const { user } = useAuth();

    const onSubmit = data => {
        const savedCart = getStoredCart();
        data.order = savedCart;
        fetch('https://ema-john-ecommerce-server.herokuapp.com/orders', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if(result.insertedId){
                    alert('Order processed Successfully!');
                    clearTheCart();
                    reset();
                }
            })
    }


    return (
        <div className="pt-5 mt-5 container-fluid" style={{ width: '22rem' }}>
            <div className="pt-5 mt-5">
                <Form onSubmit={handleSubmit(onSubmit)}>

                    <Form.Group className="mb-3" controlId="formBasicEmail"  >
                        <Form.Control type="email" defaultValue={user.email} {...register("email", { required: true })} placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicName"  >
                        <Form.Control type="text" defaultValue={user.displayName} {...register("name", { required: true })} placeholder="Enter name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicTel"  >
                        <Form.Control type="tel" {...register("phone", { required: true })} placeholder="Enter phone number" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicAddress"  >
                        <Form.Control type="address" {...register("address", { required: true })} placeholder="Enter address" />
                    </Form.Group>


                    {errors.exampleRequired && <span>This field is required</span>}

                    <Button type="submit" variant="warning">Confirm</Button>
                </Form>
            </div>
        </div>
    );
};

export default Shipping;
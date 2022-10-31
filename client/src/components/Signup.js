import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Modal, Label, TextInput, Button, Checkbox } from 'flowbite-react'

function Signup({ setCurrentUser, setLoggedIn }) {
    const [errors, setErrors] = useState([]);
    const history = useHistory()
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const { name, email, password } = formData;

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch('/signup', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        }).then((res) => {
            if (res.ok) {
                res.json().then((formData) => {
                    setCurrentUser(formData);
                    setLoggedIn(formData)
                    history.push('/')

                });
            } else {
                res.json().then((data) => {
                    setErrors(Object.entries(data.errors));
                    console.log(errors)
                });
            }
        });
    }

    return (
        <React.Fragment>
            <Modal show={true} size="md" popup={true} onClose={() => history.push('./')}
            id="login-form">
                <div id="login-container">
                <Modal.Header id="login-header"/>
                <Modal.Body id="login-body">
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
                            <h3 className="text-xl font-medium dark:text-black">
                                Create Your Account
                            </h3>
                            <div>
                                {errors ? errors.map(e => <div className='text-sm text-red-600'><span className='text-black dark:text-white'>{e[0] + ': '}</span> {e[1]}</div>) : null}
                                <div className="mb-2 block">
                                    <Label htmlFor="name" value="Your name" id="form-text"/>
                                </div>
                                <TextInput
                                    placeholder="name"
                                    required={true}
                                    name="name"
                                    value={name}
                                    onChange={handleChange}
                                    id="form-input"
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="email" value="Your email" id="form-text"/>
                                </div>
                                <TextInput
                                    placeholder="name@email.com"
                                    required={true}
                                    name="email"
                                    value={email}
                                    onChange={handleChange}
                                    id="form-input"
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="password" value="Your password" id="form-text"/>
                                </div>
                                <TextInput
                                    name="password"
                                    type="password"
                                    required={true}
                                    value={password}
                                    onChange={handleChange}
                                    id="form-input"
                                />
                            </div>
                            <div className="flex justify-between">
                                <div className="flex items-center gap-2">
                                    <Checkbox id="remember"class="w-4 h-4 text-gray-600 bg-gray-100 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-800 dark:bg-gray-300 dark:border-gray-600"/>
                                    <Label htmlFor="remember" id="form-text">Remember Me</Label>
                                </div>
                            </div>
                            <div className="w-full">
                                <Button type="submit" id="form-button">Create Account</Button>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                </div>
            </Modal>
        </React.Fragment>
    )


}

export default Signup
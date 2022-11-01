import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

// react router flowbite imports
import { Modal, Label, TextInput, Checkbox, Button } from 'flowbite-react'

// setting form visible on login form
function Login({ visible, setVisible, setCurrentUser, setLoggedIn }) {
    
    // use history helps us to push the home page status
    const history = useHistory()
    const [errors, setErrors] = useState([]);
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const { email, password } = formData;

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch('/login', {
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
                    // home page pushed after login
                    history.push('/')
                });
            } else {
                res.json().then((data) => {
                    setErrors(data);
                });
            }
        });
    }


    function formClose() {
        setVisible(false)
        history.push('/')
    }

   

    return (
        <React.Fragment 
        >

{/* <!-- Button trigger modal --> */}
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
</button>

{/* <!-- Modal --> */}
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
            <Modal 
            show={visible} size="md" popup={true} onClose={formClose}
            id="login-form">
                <div id="login-container">
                <Modal.Header id="login-header"/>
                <Modal.Body id="login-body">
                    <form onSubmit={handleSubmit}
                    >
                        <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8 ">
                            <h3 className="text-xl font-medium dark:text-black">
                                Sign In
                            </h3>
                            {errors.length > 0 ?
                                <></>
                                :
                                <h6 className='text-sm text-red-600'>{errors.error}</h6>
                            }
                            <div >
                                <div className="mb-2 block">
                                    <Label htmlFor="email" value="Your email" 
                                    id="form-text"/>
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
                                    <Checkbox id="remember" class="w-4 h-4 text-gray-600 bg-gray-100 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-800 dark:bg-gray-300 dark:border-gray-600"/>
                                    <Label htmlFor="remember" id="form-text">Remember me</Label>
                                </div>
                                <a
                                    href="/modal"
                                    className="text-md text-white hover:underline dark:text-black"
                                >
                                    Lost Password?
                                </a>
                            </div>
                            <div className="w-full">
                                <Button type="submit" id="form-button">Log in to your account</Button>
                            </div>
                            <div className="text-md font-lg text-gray-500 dark:text-black">
                                Not registered?
                                <br/>
                                <a
                                    href="/signup"
                                    onClick={() => setVisible(true)}
                                    className="text-orange-600 hover:underline dark:text-orange-600"
                                >
                                    Create account
                                </a>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                </div>
            </Modal>
            
        </React.Fragment>
    );
}

export default Login
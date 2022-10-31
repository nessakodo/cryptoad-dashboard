import React, { useState } from 'react'
import { Button, Modal, Tooltip, Label, FileInput } from 'flowbite-react'

function ProfileCard({ currentUser, setCurrentUser}) {
    const [showEdit, setShowEdit] = useState(false)
    const [formData, setFormData] = useState({})
    const [checked, setChecked] = useState(true)
    const [imageData, setImageData] = useState(null)
    const [modal, setModal] = useState(false)

    function handleInputChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        console.log(formData)
    }

    
//   const [resumeData, setResumeData] = useState({
   
//     url: ""
// });

const { url } = formData;

    const form = document.getElementById("update-form")

    function handleSubmit(e) {
        fetch(`/users/${currentUser.id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        })
            .then((res) => res.json())
            .then((data) => {
                setCurrentUser(data)
            });
    }

    function handleEdit() {
        setShowEdit(!showEdit)
        form.scrollIntoView({ behavior: "smooth" });
    }

    // function handleImage() {
    //     const data = new FormData()
    //     data.append('candidate_id', currentCandidate.id)
    //     data.append('image', imageData)
    //     fetch('/profile_photos', {
    //         method: "POST",
    //         body: data
    //     })
    //     .then((data) => {
    //         setProfPhoto(data)
    //     })
    // }



    return (
        
        <div >
            <br />
        <Tooltip content="Update Photo">
            {/* <img onClick={() => setModal(true)} class="object-cover w-72 h-72 rounded-full hover:cursor-pointer ml-12" src={profPhoto.image_url} alt="profile" 
            
            /> */}
        </Tooltip>
   
      
        <br />

            <div class='flex flex-col lg:flex lg:flex-row lg:justify-between lg:items-center'>
                              
            <dl class="max-w-md text-gray-900 divide-y divide-black-200 dark:text-black dark:divide-gray-700">
                    <div class="flex flex-col pb-3">
                        <dt class="mb-1 text-gray-500 md:text-sm dark:text-gray-400">Name</dt>
                        <dd class="text-sm font-semibold">{currentUser.name}</dd>
                    </div>
                </dl>

                <dl class="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-black dark:divide-gray-700">
                <div class="flex flex-col pb-3">
                        <dt class="mb-1 text-gray-500 md:text-sm dark:text-gray-400">Email</dt>
                        <dd class="text-sm font-semibold">{currentUser.email}</dd>
                    </div>
                </dl>

                <dl class="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-black dark:divide-gray-700">
                <div class="flex flex-col pb-3">
                        <dt class="mb-1 text-gray-500 md:text-sm dark:text-gray-400">Password</dt>
                        <dd class="text-sm font-semibold">{currentUser.password}············</dd>
                    </div>
                </dl>

                <div class='flex justify-center'>
                <Button
                    onClick={handleEdit}
                    outline={true}
                    gradientDuoTone="cyanToBlue"
                    class='relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-black active:text-blue-500 dark:text-black focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800'
                >
                    Edit Profile
                </Button>


                
          
            
            </div>
            </div>

                <div className='py-5 flex flex-col items-center'>
                 

                        <br />
                
  
                            </div>

              
       
            
            <div class={showEdit ? " " : "invisible"}>

                
                <form id="update-form" class='pt-4 pb-10' onSubmit={handleSubmit}>
                    <div class="relative z-0 mb-6 w-full group">
                        <input onChange={handleInputChange} type="text" name="Name" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                        <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                    </div>
                    <div class="relative z-0 mb-6 w-full group">
                        <input onChange={handleInputChange} type="email" name="email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                        <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                    </div>
                    <div class="relative z-0 mb-6 w-full group">
                        <input onChange={handleInputChange} type="password" name="password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                        <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                    </div>

                
      

                    <button type="submit" class="text-black bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button>
                </form>
            </div>

            <React.Fragment>
                <Modal
                    show={modal}
                    size="xl"
                    popup={true}
                    onClose={() => setModal(false)}
                >
                    <Modal.Header />
                    <Modal.Body>
                        <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
                            <h3 className="text-xl font-medium text-gray-900 dark:text-black">
                                Update Profile Photo
                            </h3>
                            <div className='flex flex-col items-center'>
                                {/* <div>
                                    <img class="object-cover w-96 h-96 rounded-full hover:cursor-pointer" src={profPhoto.image_url} alt="profile" />
                                </div> */}
                                <div className=''>
                                    {/* <form className='flex flex-row justify-between pt-5' onSubmit={handleImage}>
                                        <input onChange={(e) => setImageData(e.target.files[0])} class='w-6/12 text-black dark:text-black bg-gray-800 rounded-lg' type="file" name="uploader" id="uploader" />
                                        <button type="submit" class="text-black bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-1  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Update Photo</button>
                                    </form> */}
                                </div>
                            </div>

                        </div>
                    </Modal.Body>
                </Modal>
            </React.Fragment>

        </div>
    )
}

export default ProfileCard
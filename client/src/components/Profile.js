import React, {useState} from 'react'
import ProfileCard from './ProfileCard'
// import MyJobs from "./MyJobs"

export default function Profile({ onRemove, setJobsComp, jobsComp, profileCard, profPhoto, currentUser, setCurrentUser, setProfileCard, myJobs }) {

const [isClicked, setIsClicked] = useState(false)

    return (
        <div class='flex justify-center'>
            <div class='w-3/4 flex items-center flex-col pt-4'>

                <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-black md:text-5xl lg:text-6xl">Welcome back {currentUser.name}</h1>

                {/* MyJobs Tabs */}
                <ul class="flex flex-wrap mb-5 mt-5 text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
                    <li class="mr-2">
                        <a href="#" onClick={() => setIsClicked(!isClicked)} name="profileCard" aria-current="page" class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Account</a>
                    </li>
                    <li class="mr-2">
                        <a href="#" onClick={() => setIsClicked(!isClicked)} name="jobsComp" class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">My Jobs</a>
                    </li>
                </ul>

                { isClicked ? 
                <></>
                :
                <ProfileCard currentUser={currentUser} setCurrentUser={setCurrentUser} profPhoto={profPhoto} />
                } 

          

</div>
</div>
)
}

      
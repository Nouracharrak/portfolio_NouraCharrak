import Image from 'next/image';
import { useState } from 'react';
import { aboutMeData } from '../../data/aboutMeData';

function AboutMeBio() {
    const [aboutMe, setAboutMe] = useState(aboutMeData);
    return (
        <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-start mt-14">
            <div className="flex-shrink-0 flex justify-center sm:block w-full sm:w-1/4 mb-6 sm:mb-0 sm:mt-10">
                <Image
                    src="/images/profile.jpg"
                    width={200}
                    height={200}
                    className="rounded-xl shadow-lg object-cover"
                    alt="Profile Image"
                />
            </div>

            <div className="font-general-regular w-full sm:w-3/4 text-left">
                {aboutMe.map((bio) => (
                    <p
                        className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
                        key={bio.id}
                    >
                        {bio.bio}
                    </p>
                ))}
            </div>
        </div>
    );
}

export default AboutMeBio;

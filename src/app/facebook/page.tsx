'use client'

import { useRouter } from 'next/navigation';
import { Button } from 'react-bootstrap';


const Facebook = () => {
    const router = useRouter()

    const handleBtn = () => {
        router.push("/")
    }

    return (
        <div>
            facebook page
            <div>

                <Button variant='danger'>Demo</Button>

                <button onClick={() => handleBtn()}>Back Home</button>
            </div>
        </div>
    )
}

export default Facebook;
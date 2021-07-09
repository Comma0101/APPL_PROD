import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function front_page() {
    return (
        <div>
            <div className="container">
                <div className="row row-cols-2">
                    <div className="col" style={{}}>
                    <Link href='/' >
                        <a>
                            <h3>
                                T Shirts
                            </h3>
                                <Image alt="" height="427" width="640" src='/images/kith/FZZ2021063001003/1.jpg' />
                        </a>
                    </Link>
                    </div>
                    <div className="col">
                        <Link href='/' >
                            <a>
                                <h3>
                                    Jackets
                                </h3>
                                <Image alt="" height="427" width="640" src='/images/kith/FZZ2021063001002/2.jpg' />
                            </a>
                        </Link>
                    </div>
                    <div className="col">
                        <Link href='/' >
                            <a>
                                <h3>
                                    Hoodies    
                                </h3>
                              
                                <Image alt="" height="427" width="640" src='/images/kith/FZZ2021063001001/3.jpg' />
                            </a>
                        </Link>
                    </div>
                    <div className="col">
                    <Link href='/' >
                        <a>
                            <h3>
                                Accessories       
                            </h3>
                           
                            <Image alt="" height="427" width="640" src='/images/kith/FZZ2021063001001/4.jpg' />
                        </a>
                    </Link>
                    
                    </div>
         </div>
</div>
        </div>
    )
}

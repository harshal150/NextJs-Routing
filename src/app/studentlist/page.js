'use client'
import Link from "next/link";

function StudentList() {
    return ( <div>
        <ul>
            <li>
                <Link href='studentlist/Ram'>Ram</Link>
            </li>
            <li>
                <Link href='studentlist/Sam'>Sam</Link>
            </li>
            <li>
                <Link href='studentlist/Akshay'>Akshay</Link>
            </li>
            <li>
                <Link href='studentlist/Tushar'>Tushar</Link>
            </li>
            <li>
                <Link href='studentlist/Siddhesh'>Siddhesh</Link>
            </li>
            <li>
                <Link href='studentlist/Omkar'>Omkar</Link>
            </li>
            <li>
                <Link href='studentlist/Niranjani'>Niranjani</Link>
            </li>
        </ul>
    </div> );
}

export default StudentList;
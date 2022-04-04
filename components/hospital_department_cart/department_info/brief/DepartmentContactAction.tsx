import React from 'react';
import Link from "next/link";
import styled from "styled-components";

const DepartmentContactAction = ({tag, href, text, src}, id) => {
    const Row = styled.li`
      background: url("${src}") no-repeat center left var(--spacer-xs)/4rem auto;
      margin: 0;
      padding: var(--spacer-m) 0 var(--spacer-m) 4.8rem;
    `;

    if (tag == 'a') {
        return (
            <Row key={id} className="schedule">
                <Link href={href}>
                    <a>{text}</a>
                </Link>
            </Row>
        )
    } else if (tag == 'p') {
        return (
            <li key={id} className="schedule">
                <p>{text}</p>
            </li>
        )
    }
}

export default DepartmentContactAction;
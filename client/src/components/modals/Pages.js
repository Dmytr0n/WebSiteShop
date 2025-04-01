import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";
import { Pagination } from 'react-bootstrap';
import { Context } from '../..';
import '../styles/Pages.css';  // Імпортуємо CSS

const Pages = observer(() => {
    const { device } = useContext(Context);

    const pageCount = device.limit > 0 ? Math.ceil(device.totalCount / device.limit) : 0;
    const pages = [];

    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1);
    }

    return (
        <Pagination className="mt-5">
            {pages.length === 0 ? (
                <Pagination.Item disabled className="custom-pagination-item">
                    Немає сторінок
                </Pagination.Item>
            ) : (
                pages.map(page => (
                    <Pagination.Item
                        key={page}
                        active={device.page === page}
                        onClick={() => device.setPage(page)}
                        className="custom-pagination-item page-item"
                    >
                        {page}
                    </Pagination.Item>
                ))
            )}
        </Pagination>
    );
});

export default Pages;

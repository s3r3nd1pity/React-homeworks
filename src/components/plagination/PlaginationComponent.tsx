import {useSearchParams} from "react-router-dom";

const PlaginationComponent = () => {
    const [searchParams, setSearchParams] = useSearchParams({page: '1'})

    return (
        <div>
            <button onClick={
                () => {
                    let currentPage = Number(searchParams.get('page') || '1')
                    if (currentPage>1){setSearchParams({page: (--currentPage).toString()})}

                }
            }>
                prev
            </button>
            <button onClick={
                () => {
                    let currentPage = Number(searchParams.get('page') || '1')
                    setSearchParams({page: (++currentPage).toString()})
                }
            }>
                next
            </button>
        </div>
    );
};

export default PlaginationComponent;
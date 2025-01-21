import {useSearchParams} from "react-router-dom";

const PlaginationComponent = () => {
    const [query, setquery] = useSearchParams({pg: '1'})
    return (
        <div>
            <button onClick={() => {
                const pg = query.get('pg')
                if (pg) {
                    let currentPage = +pg
                    setquery({pg: (++currentPage).toString()})

                }


            }}>next
            </button>
            <button onClick={() => {
                const pg = query.get('pg')
                if (pg) {
                    let currentPage = +pg
                    setquery({pg: (--currentPage).toString()})

                }


            }}>prev
            </button>

        </div>
    );
};

export default PlaginationComponent;
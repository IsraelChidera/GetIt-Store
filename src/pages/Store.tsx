import { StoreItem } from "../components/StoreItem";
import data from "../data/items.json";

export function Store(){
    return(
        <>
            <h1>
                Store
            </h1>

            <div className="grid grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-4">
                {data.map(item => (
                    <>
                        <div key={item.id}>
                            <StoreItem {...item} />
                        </div>
                    </>
                ))}
            </div>
        </>
    )
}
 

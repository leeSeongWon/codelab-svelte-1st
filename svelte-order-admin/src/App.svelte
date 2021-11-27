<script>
    export let name;

    import {db} from './firebaseApp';
    import {collection, doc, onSnapshot, query, updateDoc, where} from 'firebase/firestore';

    let list = [];

    const ordersRef = collection(db, 'orders');
    const q = query(ordersRef, where('status', '!=', '픽업완료'))
    onSnapshot(q, (snapshot) => {
        const newList = [];
        snapshot.forEach(doc => {
            newList.push({
                id: doc.id,
                ...doc.data(),
            });
        });
        list = newList.sort( ( x, y ) => x.date < y.data ? 1 : -1).reverse();
    });

    function update( id, status ) {
        const ref = doc(db, `orders/${id}`);
        updateDoc(ref,{status})
    }
</script>

<main>
    <h1>주문 관리</h1>
    <ul>
        {#each list as order(order.id)}
            <li>
                {#each order.detail as item(item.name)}
                    <div>
                        {item.name} &times; {item.count}
                    </div>
                {/each}
                <p>합계 : {order.sum}원</p>
                <p>
                    상태 : {order.status}
                    <button on:click={() => update( order.id, '주문완료' )}>주문완료</button>
                    <button on:click={() => update( order.id, '주문수락' )}>주문수락</button>
                    <button on:click={() => update( order.id, '제조중' )}>제조중</button>
                    <button on:click={() => update( order.id, '제조완료' )}>제조완료</button>
                    <button on:click={() => update( order.id, '픽업완료' )}>픽업완료</button>
                </p>
            </li>
        {/each}
    </ul>
</main>

<style>
</style>

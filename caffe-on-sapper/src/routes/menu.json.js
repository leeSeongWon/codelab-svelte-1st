export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(JSON.stringify([
        { name: '에스프레소', price: 2800 },
        { name: '아메리카노', price: 3000 },
        { name: '카페라떼', price: 3400 },
        { name: '바닐라라떼', price: 3700 },
    ]));
}
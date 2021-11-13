export function get(req, res) {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });

    res.end(JSON.stringify([
        {
            id: 2,
            subject: '공지사항 2222',
            content: '공지사항 2222',
            author: '관리자',
            createdAt: '2021.11.13',
        },
        {
            id: 1,
            subject: '공지사항 제목',
            content: '공지사항 내용',
            author: '관리자',
            createdAt: '2021.11.12',
        },
    ]));
}

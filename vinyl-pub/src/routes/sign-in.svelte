<script>
    import { token } from '../stores';
    import { goto } from '@sapper/app';

    let email = 'user@user.com';
    let password = 'password';
    let submit = event => {
        event.preventDefault();

        fetch( 'http://127.0.0.1:3333/auth/sign-in', {
            method: 'POST',
            body: JSON.stringify({
                email,
                password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        } )
            .then( response => response.json() )
            .then( json => {
                token.set( json.token.token );
                localStorage.setItem('vinyl-pub-token', json.token.token);
                goto( '/', {
                    replaceState: true
                } );
            } )
            .catch( console.warn );
    };
</script>

<div class="flex justify-center mt-12">
    <div class="w-72">
        <form on:submit={submit}>
            <div class="mb-3">
                <label for="email">Email</label>
                <input type="email"
                       class="form-control"
                       id="email"
                       placeholder="Email"
                       required
                       bind:value={email}>
            </div>
            <div class="mb-3">
                <label for="password">Password</label>
                <input type="password"
                       class="form-control"
                       id="password"
                       placeholder="Password"
                       required
                       bind:value={password}>
            </div>
            <div>
                <button class="btn btn-primary btn-block" type="submit">로그인</button>
            </div>
        </form>
    </div>
</div>

import { catchError, firstValueFrom, of } from 'rxjs'
import { ajax } from 'rxjs/ajax'

export const getJson = (url: string) =>
    firstValueFrom(
        ajax.getJSON(url).pipe(
            catchError((error: Error) => {
                console.log('error: ', error)
                return of(error)
            }),
        ),
    )

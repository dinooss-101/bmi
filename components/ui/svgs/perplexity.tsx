import { type SVGProps } from 'react'

export function Perplexity(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            height="1em"
            style={{
                flex: 'none',
                lineHeight: 1,
            }}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            fill="currentColor"
            {...props}
        >
            <title>{'Perplexity'}</title>
            <path
                d="M12 2L4 7v10l8 5 8-5V7l-8-5zm6 14.24l-6 3.75-6-3.75V8.76l6-3.75 6 3.75v7.48zM11 9h2v6h-2V9zm-3 2h2v4H8v-4zm6 0h2v4h-2v-4z"
                fill="currentColor"
            />
        </svg>
    )
}

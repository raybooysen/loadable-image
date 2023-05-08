import { type FC } from 'react'
import { InView } from 'react-intersection-observer'
import { Placeholder, FallbackLoader, FallbackError, absolute } from './async-image.styles'
import type { AsyncImageProps } from './async-image.types'
import { Image } from './image'

export const AsyncImage: FC<AsyncImageProps> = ({
	loader = FallbackLoader,
	error = FallbackError,
	rootMargin = '600px 0px',
	style,
	...props
}) => (
	<InView rootMargin={rootMargin} triggerOnce>
		{({ ref, inView }) => (
			<Placeholder ref={ref} style={style}>
				<Image
					error={error}
					loader={loader}
					objectFit={style.objectFit}
					inView={inView}
					{...props}
				/>
			</Placeholder>
		)}
	</InView>
)

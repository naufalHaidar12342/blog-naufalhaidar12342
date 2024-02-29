import { Skeleton } from "@nextui-org/skeleton";

export default function Loading() {
	return (
		<div className="w-full max-w-screen-xl mx-auto min-h-screen flex flex-col p-6">
			<div className="h-full w-full">
				<div>
					<Skeleton />
					<Skeleton />
				</div>
			</div>
		</div>
	);
}

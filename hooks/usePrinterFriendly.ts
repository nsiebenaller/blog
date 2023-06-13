import { useRouter } from "next/router";

/**
 * Returns the printer-friendly status of a page
 * @returns {boolean} Whether the page is set as printer-friendly
 */
const usePrinterFriendly = () => {
	const router = useRouter();
	return Boolean(router.query.print);
};

export default usePrinterFriendly;

/**
 * Makes a GET request to the specified endpoint
 * @param url - The full URL or endpoint to call
 * @returns Promise with the response data
 */
export async function get<T>(url: string): Promise<T> {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('API request failed:', error);
        throw error;
    }
}

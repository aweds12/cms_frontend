interface FetchProps {
  url: string;
  method: RequestInit["method"];
  body?: RequestInit["body"];
  params?: object;
}

export const api = async (props: FetchProps) => {
  try {
    const queryString = props.params
      ? "?" +
        new URLSearchParams(props.params as Record<string, string>).toString()
      : "";

    const res = await fetch(
      process.env.NEXT_PUBLIC_API_KEY + props.url + queryString,
      {
        method: props.method,
        headers: {
          "Content-Type": "application/json",
        },
        body: props.body ? JSON.stringify(props.body) : undefined,
      }
    );

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    return res.json();
  } catch (err) {
    console.error("API request failed:", err);
  }
};

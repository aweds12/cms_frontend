import Cookies from "js-cookie";

interface FetchProps {
  url: string;
  method: RequestInit["method"];
  body?: object;
  params?: object;
}

export const api = async (props: FetchProps, noToken: boolean = false) => {
  const REQUEST_URL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:8080"
      : process.env.NEXT_PUBLIC_API_KEY;
  try {
    const queryString = props.params
      ? "?" +
        new URLSearchParams(props.params as Record<string, string>).toString()
      : "";

    const headers: HeadersInit = noToken
      ? {
          "Content-Type": "application/json",
        }
      : {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Cookies.get("token")}`,
        };

    const res = await fetch(REQUEST_URL + props.url + queryString, {
      method: props.method,
      headers: headers,
      body: props.body ? JSON.stringify(props.body) : undefined,
    }).then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      } else {
        return response.json();
      }
    });

    return res;
  } catch (err) {
    console.error("API request failed:", err);
  }
};

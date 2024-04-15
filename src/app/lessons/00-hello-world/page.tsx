import { TestHello } from "@/components/lessons/00-hello-world/TestHello";
import Markdown from "react-markdown";

const contentPre = `
# Lab 0: Hello World

This is the first lab in the course. It's a simple one, just to get you started and acquainted with the code in this repository. 

## Server - Client 

We are using Next.js 14 with App Router for this repository and it has the capability to run server-side code as well as client-side code.

In the application below, you will be able to see this in action. 

Notice when the page loads, it has a loading state after the page has been loaded? 

This is because the server has sent your browser the initial client code and from there, it has decided to call the server endpoint at \`/api/lessons/00-hello-world\`. While that request is loading, your client code is showing a \`is loading\` state.

## Play with the application

Try typing your name into the box below and see what happens.

When the input is changed, the client will send a separate request to the server to get another Hello World response with your name in it. You may use the browser dev tools to see the network request. Notice that [debounce](https://www.npmjs.com/package/use-debounce) is added to the input so that it doesn't send a request on every keystroke.
`;

const contentPost = `
## Interact with the API directly

Now, instead of using an UI, try interacting with the server directly by visiting the endpoint [/api/lessons/00-hello-world](/api/lessons/00-hello-world) in your browser.

And then try visiting [/api/lessons/00-hello-world?name=your-name](/api/lessons/00-hello-world?name=your-name) to see the response with your name in it.

## Files of interests

\`src/app/api/lessons/00-hello-world/route.ts\`

This is the server side code for the API. Read [NextJS Route Handler](https://nextjs.org/docs/app/building-your-application/routing/route-handlers) for more info about files here.

\`src/app/lessons/00-hello-world/page.tsx\`

This is the server side code for this web page. Read [NextJS Page & Layout](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts) for more info about files here.

\`src/components/lessons/00-hello-world/TestHello.tsx\`

This is the component code for just the application below. It's a regular React component! Read React's [Get Started](https://react.dev/learn/your-first-component) guide for more info about files here.

\`src/components/lessons/00-hello-world/useHelloWorld.tsx\`

This is known as a React hook. It uses the following libraries:
- [Axios](https://axios-http.com/docs/intro) for making HTTP requests
- [Tanstack React Query](https://tanstack.com/query/latest/docs/framework/react/overview) for managing the state of the request.
`;

export default function Page() {
  return (
    <>
      <div className="prose max-w-full mt-12">
        <Markdown>{contentPre}</Markdown>
      </div>
      <TestHello />
      <div className="prose max-w-full mt-12">
        <Markdown>{contentPost}</Markdown>
      </div>
    </>
  );
}

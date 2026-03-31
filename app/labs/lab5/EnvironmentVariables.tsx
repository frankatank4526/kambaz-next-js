const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER; // environment variables located in process.env.{variable}. process is global object
export default function EnvironmentVariables() {
  return (
    <div id="wd-environment-variables">
      <h3>Environment Variables</h3>
      <p>Remote Server: {HTTP_SERVER}</p><hr/>
    </div>
);}

const ASCII_PORTRAIT = `$$$$$$$$$$$$$$$$$$$$&&&&&&&&&&&$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$&&&@@@@@@@@@%@@@%@@@@@&$$$$$$$$$$$$$$$$
$$$$$$$$$$$&@%%%%%%%%%%@%%%@%%%%%%%%%%@&$$$$$$$$$$$$
$$$$$$$$$$@%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%@&$$$$$$$$$
$$$$$$$$$@%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%@$$$$$$$$
$$$$$$$$@%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%@$$$$$$$$
$$$$$$$$@%%%%%%%%%%%%%%%%%%%%%@@@%%%%%%%%%@&$$$$$$$$
$$$$$$$&%%%%%%%%%%%%@&$$$&&$$*+++**&@%%%%%&$$$$$$$$$
$$$$$$$$@%%%%%%@$**+=-----------==++$@%%%%&$$$$$$$$$
$$$$$$$$&%%%%%$+===----:--------==+++*&%%%&$$$$$$$$$
$$$$$$$$&%%%&+=++++**$*+=---==*$$$*****$%%&$$$$$$$$$
$$$$$$$$$&@%*===+**$&$$*+=-=+*$$$$$$****@&$$$$$$$$$$
$$$$$$$$*++&*===+*+*$+++==--++++*&***++*$+*$$$$$$$$$
$$$$$$$$+==+*==---------==--=======--==+*++$$$$$$$$$
$$$$$$$$*===+==----::--=+=--++=-------=+*+*&&$$$$$$$
$$$$$$$$$+==++=--------=++++**+=-----==+++*&$$$$$$$$
$$$$$$$$&$++++========================+**$&&$$$$$$$$
$$$$$$$&$$&$&$+====++*++++=++**$**++==+*&&&$$$$$$$$$
$$$$$$$$$$$$$&*==============+++++++++*$&$$$$$$$$$$$
$&$$&$$$$&&&&&$*+++=====-======++++*$$&&$$$$$$$$$$$$
$&$&&&$&$&$$&&$+**$**+========++*$&&&$&$$$$$$$$$$$$$
&&&&&&$&$$$$$&&+++*$&$$&&&&&&&&@@@&&$$&$$$$$$$$$$$$$
&&&&&&$&$$$&@%*++==+*****$$$&&&&&$***$@&$$$$$$$$$$$$
&&&&&&$$$$&%%%==+====+++===++***++++*+%%@&$$$$$$$&$$
&&$$&&&&@%%%%%+-======+++++*++++++++-*%%%%@@&&$$$$$$
&&@@%%%%%%%%%%&---===========+++++=--@%%%%%%%%%@@&&&
%%%%%%%%%%%%%%%+-::-=======+++++=-::*%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%&::::::-=++++++=:...-@%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%+::::...:===-:.....*%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%@-::::..=**-......-@%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%+:::::+$$*$*:...:$%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%&:.::+@&$*$@&-..-@%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%*:::--$&$&@*+::+%%%%%%%%%%%%%%%%%%`;

export function WelcomeSection() {
  return (
    <div className="mb-4">
      {/* ASCII Name */}
      <pre className="text-accent font-bold text-xs sm:text-sm leading-tight whitespace-pre overflow-x-auto mb-6">
{` █████╗ ███╗   ██╗ █████╗ ███╗   ██╗████████╗██╗  ██╗
██╔══██╗████╗  ██║██╔══██╗████╗  ██║╚══██╔══╝██║  ██║
███████║██╔██╗ ██║███████║██╔██╗ ██║   ██║   ███████║
██╔══██║██║╚██╗██║██╔══██║██║╚██╗██║   ██║   ██╔══██║
██║  ██║██║ ╚████║██║  ██║██║ ╚████║   ██║   ██║  ██║
╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝`}
      </pre>

      {/* Two-column welcome box */}
      <div className="border border-dashed border-border/60 rounded-md p-4 sm:p-5 flex flex-col md:flex-row gap-6">
        {/* Left column: Portrait + info */}
        <div className="flex flex-col items-center text-center shrink-0">
          <div className="text-foreground font-bold text-base mb-3">Welcome, visitor.</div>
          <pre className="text-dim text-[0.35rem] sm:text-[0.45rem] leading-[0.4rem] sm:leading-[0.5rem] whitespace-pre overflow-hidden select-none mb-3">
            {ASCII_PORTRAIT}
          </pre>
          <div className="text-foreground text-sm">Deployment Engineer • Remote</div>
          <a
            href="mailto:ananthram1411@gmail.com"
            className="text-accent hover:text-accent-bright text-sm transition-colors"
          >
            ananthram1411@gmail.com
          </a>
        </div>

        {/* Right column: Capabilities + Navigation */}
        <div className="flex flex-col justify-between flex-1 min-w-0 gap-6">
          {/* Capabilities */}
          <div>
            <div className="text-accent font-bold text-base mb-2">Capabilities</div>
            <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-sm">
              <span className="text-accent font-bold">Deploy</span>
              <span className="text-foreground">AI Agents, Vapi, Conversational AI</span>
              <span className="text-accent font-bold">Build</span>
              <span className="text-foreground">JS/TS Integrations, APIs, Pipelines</span>
              <span className="text-accent font-bold">Scale</span>
              <span className="text-foreground">Kafka, Redis, PostgreSQL, Streaming</span>
              <span className="text-accent font-bold">Ship</span>
              <span className="text-foreground">Docker, Kubernetes, AWS, CI/CD</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div className="text-accent font-bold text-base mb-2">Navigation</div>
            <div className="text-sm space-y-0.5">
              <div className="text-foreground">/about</div>
              <div className="text-foreground">/work</div>
              <div className="text-foreground">/experience</div>
              <div className="text-foreground">/skills</div>
              <div className="text-dim">... /help for all commands</div>
              <div className="text-dim mt-1">Try /themes to change the vibe</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

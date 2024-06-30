

export default function Channels({channels}: any) {

    console.log(channels.length)
    return (
        <div className="flex flex-col items-start bg-zinc-900 w-[25%] h-full font-semibold text-neutral-700 gap-y-8 pt-4 text-sm">
          <div className="flex gap-y-1 p-2 flex-col">
            <h3
              className="uppercase 
             tracking-tighter"
            >
              text channels
            </h3>

            {channels.length > 0 && (
              <div className="pl-3 space-y-1">
                {channels.map((channel: any, index: number) => {
                  return <h3 key={index}>{channel.cost.toString()}</h3>;
                })}
              </div>
            )}
          </div>

          <div className="flex gap-y-1 p-2 flex-col">
            <h3 className="uppercase tracking-tighter">voice channels</h3>
            <div className="pl-3 space-y-1">
              <h3>channel 1</h3>
              <h3>channel 2</h3>
              <h3>channel 3</h3>
            </div>
          </div>
        </div>
    )
}
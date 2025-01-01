

type Props={
    type:'PRO' | 'FREE'
    children:React.ReactNode
}



export default function SubscriptionPlan({children,type}:Props) {
    return (
       <div>
        {children}
       </div>
    )
    }
export default function FormAction({
    handleSubmit,
    type='Button',
    action='submit',
    text
}){
    return(
        <>
        
           
            <button
                type={action}
                className="relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md  bg-purple-600 text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10"
                onSubmit={handleSubmit}
            >

                {text}
            </button>
            
            <></>
        
        </>
    )
}
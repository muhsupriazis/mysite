export default function TextArea({placeholder}){
    return <textarea style={{resize:"none"}} placeholder={placeholder} rows={6} className="border-[1px] text-lg focus:outline-none my-3 border-solid rounded py-2 px-4 ring-0 w-full"></textarea>
}
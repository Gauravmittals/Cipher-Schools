const dateFormatter= new Intl.DateTimeFormat("EN-IN",
    {
        // dateStyle:"medium"
        hour12:true,
        hour:"numeric",
        minute:"numeric",
        year:"numeric",
        month:"short",
        day:"numeric"
    }
)
export const formatDate= (date)=> dateFormatter.format(date);
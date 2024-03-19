import { useAddAccountsMutation, useDeleteAccountsMutation, useGetAccountsQuery, useUpdateAccountsMutation } from "../api/adminSlice";

export default function Admin() {
    const { data, error, isLoading, isSuccess } = useGetAccountsQuery()
    const [addAccount, response] = useAddAccountsMutation()
    const [deleteAccount] = useDeleteAccountsMutation()
    const [updateAccount] = useUpdateAccountsMutation()
    return (
        <div>
            <h4><b>Admin Component</b></h4>
            {
                isLoading ? <p>Loading...</p>:null
            }
            {
                isSuccess && data && data.map(account =>
                    <p>
                        {account.id}:{account.amount}
                        <button onClick={() => deleteAccount(account.id)}>Delete Acc</button>
                        <button onClick={() => updateAccount({ id: account.id, amount: 1111 })}>Update Acc</button>
                    </p>)
            }


            <button onClick={() => addAccount(101, data.length + 1)}>Add Account +</button>

        </div>
    )
}
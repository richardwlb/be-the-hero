import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import './styles.css';

import logoimg from '../../assets/logo.svg';

import api from '../../services/api';

export default function Profile() {

    const history = useHistory();

    const [incidents, setIncidents] = useState([]);

    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');

    // Executa uma vez
    useEffect( () => {

        api.get('profile', {
            headers: {
                Authorization: ongId,
            }
        }).then( response => {
            setIncidents(response.data);
        })
    }, [ongId]);
    // Executa o primeiro paramento que é uma função toda vez que muda o ongName
    // useEffect( () => {}, [ongname]);

    async function handleDelete(id){

        try {
            await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ongId,
                }
            });

            setIncidents( incidents.filter( incident => incident.id !== id) );

        } catch (error) {
            alert('Erro ao deletar caso.');
        }
    }

    function handleLogout(){
        localStorage.clear();
        history.push('/');
    }

    return(
        <div className="profile-container">
            <header>
                <img src={logoimg} alt="Be the Hero"/>
                <span>Bem vindo, {ongName}</span>

                <Link className="button" to="/incidents/new">Cadastrar</Link>
                <button onClick={handleLogout} >
                    <FiPower size={18} color="#E02041" />
                </button>
            </header>

            <h1>Casos cadastrados</h1>

            <ul>
                { incidents.map( incident => (
                <li key={incident.id} >  
                <strong>CASO:</strong>
                <p>{incident.title}</p>

                <strong>DESCRIÇÃO:</strong>
                <p>{incident.description}</p>

                <strong>VALOR:</strong>
                <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(incident.value)}</p>

                <button>
                    {/* !!! VERY IMPORTANT. Need to usa Arrow function here. Because if it is not used
                        when the HTML is loaded the function will be executed immedialty,
                        deleting every ITEM!!! */}
                    <FiTrash2 size={20} color="#a8a8b3" onClick={ () => handleDelete(incident.id)} />
                </button>

                </li>
                ))}
            </ul>
        </div>
    );
}
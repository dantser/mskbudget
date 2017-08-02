<?php
/**
*
* This file is part of the phpBB Forum Software package.
*
* @copyright (c) phpBB Limited <https://www.phpbb.com>
* @license GNU General Public License, version 2 (GPL-2.0)
*
* For full copyright and license information, please see
* the docs/CREDITS.txt file.*
*/

/**
* DO NOT CHANGE
*/
if (!defined('IN_PHPBB'))
{
exit;
}

if (empty($lang) || !is_array($lang))
{
$lang = array();
}

// DEVELOPERS PLEASE NOTE
//
// All language files should use UTF-8 as their encoding and the files must not contain a BOM.
//
// Placeholders can now contain order information, e.g. instead of
// 'Page %s of %s' you can (and should) write 'Page %1$s of %2$s', this allows
// translators to re-order the output of data while ensuring it remains correct
//
// You do not need this where single placeholders are used, e.g. 'Message %d' is fine
// equally where a string contains only two placeholders which are used to wrap text
// in a url you again do not need to specify an order e.g., 'Click %sHERE%s' is fine

$lang = array_merge($lang, array(
	'ALL_AVAILABLE'				=> 'Все имеющиеся',
	'ALL_RESULTS'				=> 'Все дни',

	'DISPLAY_RESULTS'			=> 'Показывать результаты как',

	'FOUND_SEARCH_MATCHES'		=> array(
		1	=> 'Найдено %d соответствие',
		2	=> 'Найдено %d соответствий',
	),
	'FOUND_MORE_SEARCH_MATCHES'	=> array(
		1	=> 'Найдено более %d соответствия',
		2	=> 'Найдено более %d соответствий',
	),
	
	'GLOBAL'					=> 'Важная',

	'IGNORED_TERMS'				=> 'проигнорированы',
	'IGNORED_TERMS_EXPLAIN'		=> 'Следующие слова в поисковом запросе были проигнорированы, так как являются часто употребимыми: <strong>%s</strong>.',

	'JUMP_TO_POST'				=> 'Перейти к сообщению',

	'LOGIN_EXPLAIN_EGOSEARCH'	=> ' должны быть зарегистрированы и авторизованы в системе для просмотра своих сообщений.',
	'LOGIN_EXPLAIN_UNREADSEARCH'=> 'Для просмотра непрочитанных сообщений Вы должны быть зарегистрированы и авторизованы в системе.',
	'LOGIN_EXPLAIN_NEWPOSTS'	=> 'Вам необходимо быть зарегистрированым и авторизованым пользователем, что посмотреть все новые сообщения с Вашего последнего визита.',
	
	'MAX_NUM_SEARCH_KEYWORDS_REFINE'  => array(
		1	=> 'Вы указали слишком много слов для поиска. Число таких слов не должно превышать %1$d.',
		2	=> 'Вы указали слишком много слов для поиска. Число таких слов не должно превышать %1$d.',
		3	=> 'Вы указали слишком много слов для поиска. Число таких слов не должно превышать %1$d.',
	),
	'NO_KEYWORDS'				=> 'Для поиска Вы должны ввести, как минимум, одно слово. Длина каждого слова должна быть не менее %d и не более %d символов, исключая символ шаблона *.',
	'NO_RECENT_SEARCHES'		=> 'За последнее время поисковых запросов не было.',
	'NO_SEARCH'					=> 'Извините, но Вам запрещено пользоваться поиском.',
	'NO_SEARCH_RESULTS'			=> 'Подходящих тем или сообщений не найдено.',
	'NO_SEARCH_LOAD'			=> 'К сожалению, использование поиска в настоящий момент невозможно. Сервер перегружен. Попробуйте повторить попытку позже.',
	'NO_SEARCH_TIME'		=> array(
		1 => 'Вы не можете произвести поиск сразу после предыдущего. Попробуйте через %d секунду.',
		2 => 'Вы не можете произвести поиск сразу после предыдущего. Попробуйте через %d секунды.',
		3 => 'Вы не можете произвести поиск сразу после предыдущего. Попробуйте через %d секунд.',
	),
	'NO_SEARCH_UNREADS'			=> 'Извините, но на данном форуме отключен поиск непрочитанных сообщений.',
	'WORD_IN_NO_POST'			=> 'Подходящих сообщений не найдено, поскольку слово <strong>%s</strong> нигде не встречается.',
	'WORDS_IN_NO_POST'			=> 'Подходящих сообщений не найдено, поскольку слова <strong>%s</strong> нигде не встречаются.',

	'POST_CHARACTERS'			=> 'символов сообщений',
	'PHRASE_SEARCH_DISABLED'	=> 'Поиск по точному совпадению не поддерживается данным форумом.',

	'RECENT_SEARCHES'			=> 'Последние поисковые запросы',
	'RESULT_DAYS'				=> 'Искать сообщения за',
	'RESULT_SORT'				=> 'Поле сортировки',
	'RETURN_FIRST'				=> 'Показывать первые',
	'GO_TO_SEARCH_ADV'			=> 'Перейти к расширенному поиску',

	'SEARCHED_FOR'					=> 'Поисковый запрос',
	'SEARCHED_TOPIC'				=> 'Поиск в теме',
	'SEARCHED_QUERY'				=> 'Поисковый запрос',
	'SEARCH_ALL_TERMS'				=> 'Искать все слова',
	'SEARCH_ANY_TERMS'				=> 'Искать любое слово/поиск с языком запросов',
	'SEARCH_AUTHOR'					=> 'Поиск по автору',
	'SEARCH_AUTHOR_EXPLAIN'			=> 'Используйте * в качестве шаблона.',
	'SEARCH_FIRST_POST'				=> 'Только в первом сообщении темы',
	'SEARCH_FORUMS'					=> 'Искать в форумах',
	'SEARCH_FORUMS_EXPLAIN'			=> 'Выберите форум или форумы, в которых будет произведен поиск. Поиск во вложенных форумах производится автоматически, если Вы не отключили соответствующую опцию ниже.',
	'SEARCH_IN_RESULTS'				=> 'Поиск в найденном',
	'SEARCH_KEYWORDS_EXPLAIN'		=> 'Вы можете использовать <strong>+</strong>, чтобы определить слова, которые должны быть в результатах, и <strong>-</strong> для слов, которых в результатах быть не должно. Вы можете разделить слова символом <strong>|</strong> для поиска любого слова из списка. Используйте <strong>*</strong> в качестве шаблона для частичного совпадения.',
	'SEARCH_MSG_ONLY'				=> 'Только в текстах сообщений',
	'SEARCH_OPTIONS'				=> 'Параметры запроса',
	'SEARCH_QUERY'					=> 'Запрос',
	'SEARCH_SUBFORUMS'				=> 'Искать в подфорумах',
	'SEARCH_TITLE_MSG'				=> 'В названиях тем и текстах сообщений',
	'SEARCH_TITLE_ONLY'				=> 'Только по названию темы',
	'SEARCH_WITHIN'					=> 'Искать',
	'SORT_ASCENDING'				=> 'по возрастанию',
	'SORT_AUTHOR'					=> 'Автор',
	'SORT_DESCENDING'				=> 'по убыванию',
	'SORT_FORUM'					=> 'Форум',
	'SORT_POST_SUBJECT'				=> 'Заголовок сообщения',
	'SORT_TIME'						=> 'Время размещения',
	'SPHINX_SEARCH_FAILED'		=> 'Ошибка поиска: %s',
	'SPHINX_SEARCH_FAILED_LOG'	=> 'Извините, поиск не может быть выполнен. Больше информации об этой ошибке можно найти в соответствующем логе.',

	'TOO_FEW_AUTHOR_CHARS'	=> array(
		1	=> 'Вы должны указать по крайней мере %d символов имени автора.',
		2	=> 'Вы должны указать по крайней мере %d символов имени автора.',
	),
));